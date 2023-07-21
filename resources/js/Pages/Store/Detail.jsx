import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import placeholder from "../../../../public/placeholder.png";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Detail({ auth, data }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail
                </h2>
            }
        >
            <Head title="Detail" />

            <div class="bg-gray-100">
                <div class="pt-6">
                    <div class="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                src={placeholder}
                                alt="Two each of gray, white, and black shirts laying flat."
                                class="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={placeholder}
                                    alt="Model wearing plain black basic tee."
                                    class="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={placeholder}
                                    alt="Model wearing plain gray basic tee."
                                    class="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <img
                                src={placeholder}
                                alt="Model wearing plain white basic tee."
                                class="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                {data.nama}
                            </h1>
                        </div>

                        <div class="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 class="sr-only">Product information</h2>
                            <p class="text-3xl tracking-tight text-gray-900">
                                Rp {data.harga}{" "}
                                <span class="text-gray-500 text-xs">
                                    (Stock: {data.stok})
                                </span>
                            </p>

                            <div class="mt-6">
                                <h3 class="sr-only">Reviews</h3>
                                <div class="flex items-center">
                                    <div class="flex items-center">
                                        <svg
                                            class="text-gray-900 h-5 w-5 flex-shrink-0"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <svg
                                            class="text-gray-900 h-5 w-5 flex-shrink-0"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <svg
                                            class="text-gray-900 h-5 w-5 flex-shrink-0"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <svg
                                            class="text-gray-900 h-5 w-5 flex-shrink-0"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <svg
                                            class="text-gray-200 h-5 w-5 flex-shrink-0"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p class="sr-only">4 out of 5 stars</p>
                                    <a
                                        href="#"
                                        class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        756 reviews
                                    </a>
                                </div>
                            </div>

                            <Link class="mt-10" href={route("store.order", data.id)}>
                                <button
                                    type="submit"
                                    class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Purchase
                                </button>
                            </Link>
                        </div>

                        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            <div>
                                <h3 class="sr-only">Description</h3>

                                <div class="space-y-6">
                                    <p class="text-base text-gray-900 text-justify">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </p>
                                </div>
                            </div>

                            <div class="mt-10">
                                <h3 class="text-sm font-medium text-gray-900">
                                    Highlights
                                </h3>

                                <div class="mt-4">
                                    <ul
                                        role="list"
                                        class="list-disc space-y-2 pl-4 text-sm"
                                    >
                                        <li class="text-gray-400">
                                            <span class="text-gray-600">
                                                Sed ut perspiciatis unde omnis
                                            </span>
                                        </li>
                                        <li class="text-gray-400">
                                            <span class="text-gray-600">
                                                At vero eos et accusamus et
                                                iusto odio
                                            </span>
                                        </li>
                                        <li class="text-gray-400">
                                            <span class="text-gray-600">
                                                Nam libero tempore, cum soluta
                                            </span>
                                        </li>
                                        <li class="text-gray-400">
                                            <span class="text-gray-600">
                                                Ut enim ad minima veniam
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="mt-10">
                                <h2 class="text-sm font-medium text-gray-900">
                                    Details
                                </h2>

                                <div class="mt-4 space-y-6">
                                    <p class="text-sm text-gray-600 text-justify">
                                        Et harum quidem rerum facilis est et
                                        expedita distinctio. Nam libero tempore,
                                        cum soluta nobis est eligendi optio
                                        cumque nihil impedit quo minus id quod
                                        maxime placeat facere possimus, omnis
                                        voluptas assumenda est, omnis dolor
                                        repellendus. Temporibus autem quibusdam
                                        et aut officiis debitis aut rerum
                                        necessitatibus saepe eveniet ut et
                                        voluptates.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
