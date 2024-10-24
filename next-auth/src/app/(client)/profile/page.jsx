"use client";

import { Avatar, Button } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

export default function ProfilePage() {
  const t = useTranslations("ProfilePage");
  const { data, status } = useSession();
  const [providers, setProviders] = useState([]);
  const [googleProfile, setGoogleProfile] = useState(null);
  const [githubProfile, setGithubProfile] = useState(null);

  const getProfile = async () => {
    const response = await fetch("/api/profile");
    if (response.ok) {
      return response.json();
    }
  };

  const handleSignOut = async () => {
    const response = await fetch("/api/signOut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    if (response.ok) {
      const callbackUrl = "/auth";
      signOut(callbackUrl);
    }
  };

  useState(() => {
    (async () => {
      const response = await getProfile();
      const {
        profile,
        providers,
        google: googleProfile,
        github: githubProfile,
      } = response?.success;
      setProfile(profile);
      setProviders(providers);
      console.log("providers", providers);
      if (providers.includes("github")) {
        setGithubProfile(githubProfile);
      }
      if (providers.includes("google")) {
        setGoogleProfile(googleProfile);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto pt-20">
      {status === "loading" && <p>Loading...</p>}
      {status === "authenticated" && (
        <>
          <div className="flex items-center gap-2">
            <Avatar size="lg" src={data?.user?.image} />
            <div>
              <h2>{data?.user?.name}</h2>
              <h3>{data?.user?.email}</h3>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Button
                size="lg"
                onClick={() => signIn("github")}
                disabled={providers.includes("github")}
                className="text-white bg-teal-500 font-bold"
              >
                {providers.includes("github") ? (
                  <div className="flex items-center gap-2">
                    <Avatar size="sm" src={githubProfile?.avatar} />
                    {githubProfile?.name}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <FaGithub /> {t("not-registered-github")}
                  </div>
                )}
              </Button>
              <Button
                size="lg"
                onClick={() => signIn("google")}
                disabled={providers.includes("google")}
                className="text-white bg-teal-500 font-bold"
              >
                {providers.includes("google") ? (
                  <div className="flex items-center gap-2">
                    <Avatar size="sm" src={googleProfile?.avatar} />
                    {googleProfile?.name}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <FaGoogle /> {t("not-registered-google")}
                  </div>
                )}
              </Button>
            </div>
            <Button
              size="lg"
              onClick={handleSignOut}
              className="text-white bg-teal-500 font-bold"
            >
              {t("sign-out-button")}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
