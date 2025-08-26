import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  response.headers.set("X-Robots-Tag", "index, follow, all")
  response.headers.set("robots", "index, follow")
  response.headers.delete("X-Robots-Tag-noindex")
  response.headers.delete("noindex")

  // 强制移除任何可能的noindex相关标头
  const headersToDelete = [
    "X-Robots-Tag-noindex",
    "X-Robots-Tag-nofollow",
    "X-Robots-Tag-none",
    "X-Robots-Tag-noarchive",
    "X-Robots-Tag-nosnippet",
  ]

  headersToDelete.forEach((header) => {
    response.headers.delete(header)
  })

  // 添加额外的SEO标头
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "SAMEORIGIN")

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
