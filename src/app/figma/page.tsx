"use client";

import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useWindowSize } from "rooks";

export default function FigmaPage() {
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
        href="https://www.figma.com/design/STAiOT51lRdSOmFcxZQl3F/Bird.com---Journeys?node-id=3-2&t=oeIecKGPUF9WnVIj-1"
        target="_blank"
      >
        <Button>
          Open <ExternalLinkIcon size={16} className="ml-2" />
        </Button>
      </Link>
      <iframe
        title="Figma Embed"
        ref={iframeRef}
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FSTAiOT51lRdSOmFcxZQl3F%2FBird.com---Journeys%3Fnode-id%3D3-2%26t%3DoeIecKGPUF9WnVIj-1"
      />
    </div>
  );
}
