import Link from "next/link"
import Image from "next/image"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Navigation() {
    return (
      <nav className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">Sponge</span>
            <span className="text-sm text-gray-600">powered by</span>
            {/* 若有品牌小圖示，可在此放置 */}
            {/* <Image src="/powered_by_s.png" alt="powered by S" width={24} height={24} /> */}
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/product" className="text-sm font-medium hover:text-[#90B873]">
            Product
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#90B873]">
            About us
          </Link>
          <Button variant="default">Launch app</Button>
        </div>
  
        {/* 手機版顯示漢堡選單 */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </nav>
    )
  }

// export function Navigation() {
//   return (
//     <nav className="flex items-center justify-between p-4 md:p-6">
//       <div className="flex items-center gap-2">
//         <Link href="/" className="flex items-center gap-2">
//           <span className="text-2xl font-bold">Sponge</span>
//           <span className="text-sm text-muted-foreground">powered by</span>
//         </Link>
//       </div>
      
//       <div className="hidden md:flex items-center gap-6">
//         <Link href="/product" className="text-sm font-medium hover:text-primary">
//           Product
//         </Link>
//         <Link href="/about" className="text-sm font-medium hover:text-primary">
//           About us
//         </Link>
//         <Button variant="default">Launch app</Button>
//       </div>

//       <Button variant="ghost" size="icon" className="md:hidden">
//         <Menu className="h-6 w-6" />
//       </Button>
//     </nav>
//   )
// }

