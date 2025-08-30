import { NextResponse } from "next/server";
import User from "@/models/User";
import connectToDatabase from "@/lib/db";

export async function POST(request) {
  try {
    await connectToDatabase();

    const { name, email, password, confirmPassword } = await request.json();

    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = password; // Replace with actual hashing logic

    console.log({ name, email, password, confirmPassword });

    const newUser = new User({
      username: name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
