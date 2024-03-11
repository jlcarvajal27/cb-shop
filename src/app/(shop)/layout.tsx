import { Footer, Sidebar, TopMenu } from "@/components";



export default function ShopLayout({children}: {
    children: React.ReactNode;
}){
  return (
    <main className="min-h-screen px-10">
      <TopMenu/>
      <Sidebar/>


     
        {children}
    
      

      <Footer/>
    </main>
  )
}






































// export default function Layout({children} : {
//     children: React.ReactNode
// }){
//   return (
//     <main>
//       {children}
//     </main>
//   )
// }
