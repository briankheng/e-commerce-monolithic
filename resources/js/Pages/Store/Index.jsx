import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import placeholder from "../../../../public/placeholder.png";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Store({ auth, data = [] }) {
    const itemsPerPage = 4;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const paginationVariants = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
            },
        },
    };

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Store
                </h2>
            }
        >
            <Head title="Store" />

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mx-10">
                {currentItems &&
                    currentItems.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={placeholder}
                                    alt="placeholder"
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link
                                            href={route(
                                                "store.detail",
                                                product.id
                                            )}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            {product.nama}
                                        </Link>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    Rp. {product.harga}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>

            <motion.div
                variants={paginationVariants}
                initial="hidden"
                animate="visible"
            >
                <ReactPaginate
                    nextLabel={
                        <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md">
                            <BsChevronRight />
                        </span>
                    }
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel={
                        <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md mr-4">
                            <BsChevronLeft />
                        </span>
                    }
                    pageClassName="block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel={<span className="mr-4">...</span>}
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="flex items-center justify-center mt-8 mb-4"
                    activeClassName="text-indigo-900 font-black"
                    renderOnZeroPageCount={null}
                />
            </motion.div>
        </AuthenticatedLayout>
    );
}
