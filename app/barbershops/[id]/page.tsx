import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopsDetailsPage {
    params: {
        id?: string
    }
}

const BarbershopsDetailsPage = async ({ params }: BarbershopsDetailsPage) => {
    const session = await getServerSession(authOption)

    if (!params.id) {
        // TODO: redirecionar para home
        return null
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true
        }
    })

    if (!barbershop) {
        // TODO: redirecionar para home
        return null
    }

    return (
        <div>
            <BarbershopInfo barbershop={barbershop} />

            <div className="px-5 py-6 flex flex-col gap-3">
                {barbershop.services.map((service) => (
                    <ServiceItem key={service.id} service={service} isAuthenticated={!!session?.user} />
                ))}
            </div>

        </div>
    );
}

export default BarbershopsDetailsPage;