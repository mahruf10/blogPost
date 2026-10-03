import Navbar from "../../components/navbar";

export default function CommonLayout({ children }:{children: React.ReactNode}) {
  return (<>
  <Navbar></Navbar>
      <div>{children}
        
      </div>
  </>
   
   
  );
}