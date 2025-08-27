import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 这里可以保留其他需要的逻辑，比如重定向、安全校验等
  // 目前只返回默认的响应，不再设置 robots 相关的 header
  return NextResponse.next();
}
