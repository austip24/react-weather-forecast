import React from "react";
import { Transition, Dialog } from "@headlessui/react";
import Search from "./Search";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

function SearchModal({ isOpen, onClose, children }: ModalProps) {
	const handleOnSearchChange = async (searchData: string) => {
		console.log(searchData);
	};

	return (
		<>
			{children}
			<Transition appear show={isOpen} as={React.Fragment}>
				<Dialog as="div" className="relative z-10" onClose={onClose}>
					<Transition.Child
						as={React.Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={React.Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-[#343D4B] border border-white/50 p-6 text-left align-middle shadow-xl transition-all rounded-[10px]">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-white"
									>
										Change Location
									</Dialog.Title>
									<Search
										onSearchChange={handleOnSearchChange}
										debounceTimeout={600}
									/>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

export default SearchModal;
