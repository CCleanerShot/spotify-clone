"use client";

import React from "react";
import { useState } from "react";
import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupebaseProviderProps {
	children: React.ReactNode;
}

const SupebaseProvider: React.FC<SupebaseProviderProps> = ({ children }) => {
	const [superbaseClient, setSuperbaseClient] = useState(() => createClientComponentClient<Database>());

	return <SessionContextProvider supabaseClient={superbaseClient}>{children}</SessionContextProvider>;
};

export default SupebaseProvider;
