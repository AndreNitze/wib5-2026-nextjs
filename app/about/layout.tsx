import React from "react";

export default function StaticPageLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}