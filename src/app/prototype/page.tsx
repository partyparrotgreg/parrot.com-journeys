"use client";

import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useWindowSize } from "rooks";

export default function FigmaPrototypePage() {
  const { innerHeight, innerWidth } = useWindowSize();

  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current || !innerHeight || !innerWidth) {
      return;
    }

    const iframe = iframeRef.current;

    iframe.style.width = `${innerWidth - 300}px`;
    iframe.style.height = `${innerHeight}px`;
  }, [innerHeight, innerWidth]);
  return (
    <div className="relative min-h-screen">
      <Link
        className="fixed right-4 top-4"
        href="https://www.figma.com/proto/STAiOT51lRdSOmFcxZQl3F/Bird.com---Journeys?page-id=3%3A2&node-id=24-9307&viewport=8823%2C1737%2C0.6&t=k55O0ibhCIElyAFU-1&scaling=min-zoom&starting-point-node-id=24%3A9307&show-proto-sidebar=1"
        target="_blank"
      >
        <Button>
          Open <ExternalLinkIcon size={16} className="ml-2" />
        </Button>
      </Link>

      <iframe
        title="Prototype"
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FSTAiOT51lRdSOmFcxZQl3F%2FBird.com---Journeys%3Fpage-id%3D3%253A2%26node-id%3D24-9307%26viewport%3D8823%252C1737%252C0.6%26t%3Dk55O0ibhCIElyAFU-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D24%253A9307%26show-proto-sidebar%3D1"
        ref={iframeRef}
      ></iframe>
    </div>
  );
}
