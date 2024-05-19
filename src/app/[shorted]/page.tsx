import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function RedirectPage({ params }: { params: { shorted: string } }) {
    const shorted = params.shorted;

    const link = await prisma.links.findUnique({
        where: {
            shorted
        }
    })

    if (link) {
        return redirect(link.url);
    }

    return <h1>test</h1>
}
