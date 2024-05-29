import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="text-xl">Start here</div>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Wireframes</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I use Whimsical for wireframing. However, I can also use Figma
              since it takes the same amount of time for me to create quick
              ideas in Figma with hi fidelity designs using AutoLayout.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/wireframes">
              <Button className="">Wireframes</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Designs</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Showcase of building a design system in Figma and using it in the
              designs.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/figma">
              <Button className="">Figma designs</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Prototype</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Simple prototype</p>
          </CardContent>
          <CardFooter>
            <Link href="/prototype">
              <Button className="">Prototype</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Journeys</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Implementation of some of the ideas from the wireframes and
              designs.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/journeys">
              <Button className="">Implementation</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Code</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Links to Github</p>
          </CardContent>
          <CardFooter className="gap-2">
            <Link
              href="https://github.com/partyparrotgreg/parrot.com-journeys"
              target="_blank"
            >
              <Button className="">
                Github <ExternalLinkIcon size={16} className="ml-2" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
