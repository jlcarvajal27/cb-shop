

export default function ShopLayout({children} : {
    children: React.ReactNode
}){
  return (
    <main className="flex justify-center">

      <div className="w-full sm:w-[350px] px-10">
          {children}
      </div>
    
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
