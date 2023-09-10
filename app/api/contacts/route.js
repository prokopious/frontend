import { prisma } from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    try {
      const json = await request.json();
  
      const contact = await prisma.contact.create({
        data: json,
      });
  
      let json_response = {
        status: "success",
        data: {
          contact,
        },
      };
      return new NextResponse(JSON.stringify(json_response), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error.code === "P2002") {
        let error_response = {
          status: "fail",
          message: "Contact with title already exists",
        };
        return new NextResponse(JSON.stringify(error_response), {
          status: 409,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      let error_response = {
        status: "error",
        message: error.message,
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  
  export async function GET(request) {
    const page_str = request.nextUrl.searchParams.get("page");
    const limit_str = request.nextUrl.searchParams.get("limit");
  
    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10;
    const skip = (page - 1) * limit;
  
    const contacts = await prisma.contact.findMany({
      skip,
      take: limit,
    });
  
    let json_response = {
      status: "success",
      results: contacts.length,
      contacts,
    };
    return NextResponse.json(json_response);
  }