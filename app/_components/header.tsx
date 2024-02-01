import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 items-center justify-between flex flex-row">
                <Image src="/logo.png" alt="FSW Barber" height={22} width={128}></Image>
                <Button variant="outline" size="icon">
                    <MenuIcon size={18}/>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;