import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // 强制设置robots标头，覆盖任何可能的noindex设置
  response.headers.set("X-Robots-Tag", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1")
  response.headers.delete("X-Robots-Tag-noindex") // 删除任何可能的noindex标头

  // 添加额外的SEO标头
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "SAMEORIGIN")

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
