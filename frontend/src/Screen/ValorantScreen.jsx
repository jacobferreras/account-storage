import React, { useState, useEffect } from "react";

import CustomInputField from "../components/ui/CustomInputField";
import AccountCard from "../components/common/AccountCard";
import AddModal from "../components/modals/AddModal";
import useToggleModal from "../hooks/useToggleModal";
import useCreateAccount from "../hooks/useCreateAccount";
import backgroundImage from "../assets/reyna.jpeg";
import Pagination from "../components/common/Pagination";
import DropdownInputField from "../components/ui/DropdownInputField";

const ValorantAccountScreen = () => {
  const { isModalOpen, openModal, closeModal } = useToggleModal();
  const {
    items,
    addItem,
    updateAccount,
    deleteAccount,
    currentPage,
    totalPages,
    setCurrentPage,
    ranks,
    setRanks,
    search,
    setSearch,
  } = useCreateAccount();

  return (
    <>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex justify-center items-center my-20">
            <h1 className="font-bold text-6xl text-white">Valorant Account</h1>
          </div>
          <div className="flex justify-center items-center gap-3 pb-10">
            <CustomInputField
              type="search"
              placeholder="Search"
              showIcon={true}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <DropdownInputField
              value={ranks}
              onChange={(e) => setRanks(e.target.value)}
            />

            <button
              className={`btn btn-active  bg-blue-600`}
              onClick={openModal}
            >
              Add Account
            </button>
          </div>
          <div>
            <AccountCard
              accounts={items}
              onUpdateAccount={updateAccount}
              onDeleteAccount={deleteAccount}
            />
          </div>
          <div className="flex justify-center items-center my-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <AddModal
          closeModal={closeModal}
          onAddItem={addItem}
          modalTitle="Add Your Valorant Account"
          modalDescription="Enter the details of your account below:"
        />
      )}
    </>
  );
};

export default ValorantAccountScreen;
