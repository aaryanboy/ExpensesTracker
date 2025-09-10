import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export function middleware(NextRequest, NextResponse) {
  const response = NextResponse.next({
    request: {
        headers: new Headers(req.headers),
    }
  });
  
  response.cookies.set('isAuthed2','true')
  console.log('Middleware executed, cookie set.', response.cookies  );


  return NextResponse.next();

}

export const config = {
  matcher: '/',
};