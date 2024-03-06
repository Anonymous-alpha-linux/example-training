import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const PageHome = lazy(() => import("@/pages/page-home"));
const PageBlog = lazy(() => import("@/pages/page-blog"));
const PageAdmin = lazy(() => import("@/pages/page-admin"));

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <section>
                <h1>Default text</h1>
                <Outlet></Outlet>
            </section>
        ),
        children: [
            {
                path: "home",
                element: <PageHome></PageHome>,
                // loader: () => {
                //     throw new Error("Not Found", { status: 400 });
                //     return json({'something'})
                // },
            },
            {
                path: "blog",
                element: <PageBlog></PageBlog>,
            },
            {
                path: "admin",
                element: <PageAdmin></PageAdmin>,
            },
        ],
    },
]);

export default function AppRouter() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <RouterProvider router={routes}></RouterProvider>
        </Suspense>
    );
}
