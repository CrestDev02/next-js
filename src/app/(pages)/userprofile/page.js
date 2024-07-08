"use client";
import React, { useEffect } from "react";
import CustomTextField from "../../components/common/customTextField";
import { Button, Card, Grid, TextField } from "@mui/material";
import "../../styles/profilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editForm } from "../../lib/redux/slices/profileDetails/profileSlice";
import {
  clearEditedText,
  editUserDetails,
} from "../../lib/redux/slices/profileDetails/profileSlice";
import { useRouter } from "next/navigation";
const UserProfileDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { name, email, edit } = useSelector((store) => store.user);

  let newName = localStorage.getItem("name");
  let newEmail = localStorage.getItem("email") ?? email;
  let user = localStorage.getItem("authorised");

  if(!user){
    router.push("/login");
  }

  const handleSubmit = (e) => {
    if (!edit) {
      dispatch(editForm());
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      // setEdit(false);
      dispatch(editForm());
      toast.success("Profile updated successfully!");
    }
  };

  useEffect(() => {
    dispatch(editUserDetails({ newName, newEmail }));
    localStorage.setItem("name", newName);
    localStorage.setItem("email", newEmail);
  }, [newName, newEmail]);

  return (
    <div className="flex justify-center items-center w-screen h-[90vh]">
      <ToastContainer />
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Edit Profile Details
          </h5>
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                disabled={!edit}
                name="email"
                type="text"
                value={email}
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                onChange={(event) => {
                  dispatch(
                    editUserDetails({
                      newName,
                      newEmail: event.target.value,
                    })
                  );
                }}
              />
            </div>
            <label
              htmlFor="website-admin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                disabled={!edit}
                name={"name"}
                type="text"
                id="website-admin"
                value={name}
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="elonmusk"
                onChange={(event) => {
                  dispatch(
                    editUserDetails({
                      newName: event.target.value,
                      newEmail,
                    })
                  );
                }}
              />
            </div>
          </div>

          <button
            // type="submit"
            onClick={handleSubmit}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {edit ? "Submit Details" : "Edit Details"}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Login with other username?{" "}
            <a
              href="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserProfileDetails;
