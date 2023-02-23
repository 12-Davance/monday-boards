import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../types/user';
import { LoginDTO, RegisterDTO } from '../auth/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // create a new user
  async createUser(userDTO: RegisterDTO): Promise<any> {
    // get email from the input
    const { name, email, password } = userDTO;
    // check a user with that email
    const user = await this.userModel.findOne({ email });
    // Check if user already exists
    if (user) {
      // User already exists
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }
    // Hash the user's password
    const salt = await bcrypt.genSalt(12);
    const securePassword = await bcrypt.hash(password, salt);

    // Create the user and return the document
    return this.userModel.create({
      name,
      email,
      password: securePassword,
    });
  }

  async findByLogin(userDTO: LoginDTO): Promise<any> {
    const { email, password } = userDTO; // Get the email and password.
    // find user by email
    const user = await this.userModel.findOne({ email }).select('+password');

    // Check if user exists
    if (!user) {
      // User not found
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    // check if password is correct
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      // Invalid credentials
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    // return the user
    return user;
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async findByPayload(payload: any) {
    // Extract email from payload
    const { email } = payload;
    // Get user from the email
    return this.userModel.findOne({ email });
  }
}
