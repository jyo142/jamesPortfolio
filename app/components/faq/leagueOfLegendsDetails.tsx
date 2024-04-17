"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingIcon from "../loadingIcon";
import LeagueInfoCard from "../cards/leagueInfoCard";
import LeagueMasterySection from "../sections/leagueMasterySection";
import { LeagueProfileData, MasteryData } from "@/models/leagueModel";

const LeagueOfLegendsDetails: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMastery, setIsLoadingMastery] = useState(false);

  const [profileData, setProfileData] = useState<LeagueProfileData>();
  const [masteryData, setMasteryData] = useState<MasteryData>();

  const [isProfileDataError, setIsProfileDataError] = useState(false);
  const [isMasteryDataError, setIsMasteryError] = useState(false);

  const [showMasteryData, setShowMasteryData] = useState<boolean>(false);
  const getProfileData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/riot/leagueAccount");
      if (response.data.error) {
        setIsProfileDataError(true);
      } else {
        setProfileData(response.data);
      }
    } catch (e) {
      setIsProfileDataError(true);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMasteryDataSection = async () => {
    if (showMasteryData) {
      setShowMasteryData(false);
    } else {
      setShowMasteryData(true);
      if (!masteryData) {
        await getMasteryData();
      }
    }
  };

  const getMasteryData = async () => {
    setIsLoadingMastery(true);
    try {
      const response = await axios.get(
        "/api/riot/leagueMastery?puuid=" + profileData?.puuid
      );
      if (response.data.error) {
        setIsMasteryError(true);
      } else {
        setMasteryData(response.data);
      }
    } catch (e) {
      setIsMasteryError(true);
      console.error(e);
    } finally {
      setIsLoadingMastery(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const masteryDataSection = () => {
    return isLoadingMastery ? (
      <div className="flex justify-center">
        <LoadingIcon /> <p className="ml-2">Loading Mastery Data...</p>
      </div>
    ) : !isMasteryDataError ? (
      <LeagueMasterySection masteryData={masteryData} />
    ) : (
      <p>Sorry an unexpected error occured querying League of Legends Data</p>
    );
  };
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center">
          <LoadingIcon /> <p className="ml-2">Loading Data...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-5">
          <p className="mb-3">
            Most Likely! but here are some of my stats that you can compare with
            &#128513;
          </p>
          {isProfileDataError ? (
            <p>
              Sorry an unexpected error occured querying League of Legends Data
            </p>
          ) : (
            <>
              <LeagueInfoCard profileData={profileData} />
              {showMasteryData && (
                <div className="mb-5">{masteryDataSection()}</div>
              )}
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={toggleMasteryDataSection}
              >
                {!showMasteryData ? "View Mastery Data" : "Hide Mastery Data"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LeagueOfLegendsDetails;
