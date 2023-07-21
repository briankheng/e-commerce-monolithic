import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";
import placeholder from "../../../../public/placeholder.png";

export default function Order({ auth, product }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        total: product.harga,
        quantity: 1,
    });

    const handlePlus = () => {
        if (data.quantity < product.stok) {
            setData((data) => ({ ...data, quantity: data.quantity + 1 }));
            setData((data) => ({ ...data, total: data.total + product.harga }));
        }
    };

    const handleMinus = () => {
        if (data.quantity > 1) {
            setData((data) => ({ ...data, quantity: data.quantity - 1 }));
            setData((data) => ({ ...data, total: data.total - product.harga }));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Order Confirmation
                </h2>
            }
        >
            <Head title="Order Confirmation" />

            <div class="bg-gray-100 h-screen py-8">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="md:w-3/4">
                            <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                                <table class="w-full">
                                    <thead>
                                        <tr>
                                            <th class="text-left font-semibold">
                                                Product
                                            </th>
                                            <th class="text-left font-semibold">
                                                Price
                                            </th>
                                            <th class="text-left font-semibold">
                                                Quantity
                                            </th>
                                            <th class="text-left font-semibold">
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="py-4">
                                                <div class="flex items-center">
                                                    <img
                                                        class="h-16 w-16 mr-4"
                                                        src={placeholder}
                                                        alt="Product image"
                                                    />
                                                    <span class="font-semibold">
                                                        {product.nama}{" "}
                                                        <span class="text-gray-500 text-[0.625rem]">
                                                            (Stock:{" "}
                                                            {product.stok})
                                                        </span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="py-4">
                                                Rp {product.harga}
                                            </td>
                                            <td class="py-4">
                                                <div class="flex items-center">
                                                    <button
                                                        class="border rounded-md py-2 px-4 mr-2"
                                                        onClick={handleMinus}
                                                    >
                                                        -
                                                    </button>
                                                    <span class="text-center w-8">
                                                        {data.quantity}
                                                    </span>
                                                    <button
                                                        class="border rounded-md py-2 px-4 ml-2"
                                                        onClick={handlePlus}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td class="py-4">
                                                Rp {data.total}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="md:w-1/4">
                            <div class="bg-white rounded-lg shadow-md p-6">
                                <h2 class="text-lg font-semibold mb-4">
                                    Summary
                                </h2>
                                <div class="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>Rp {data.total}</span>
                                </div>
                                <div class="flex justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>Rp 0</span>
                                </div>
                                <div class="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>Rp 0</span>
                                </div>
                                <hr class="my-2" />
                                <div class="flex justify-between mb-2">
                                    <span class="font-semibold">Total</span>
                                    <span class="font-semibold">
                                        Rp {data.total}
                                    </span>
                                </div>

                                {product.stok == 0 ? (
                                    <button
                                        class="bg-gray-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                                        disabled
                                    >
                                        Checkout
                                    </button>
                                ) : null}
                                <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-400">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
