//import Users from "@/components/Users";
import Tutorials from "@/components/Tutorials";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { useRouter } from "next/router";
import React from "react";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import {useAuth} from "@/lib/auth";
import Subject from "@/components/Subject";

const Profile = () => {
    /*const router = useRouter();

    //const { user } = router.query;
    const { tutorialId } = router.query;
    const { data, error } = useSWR(`/tutorials/${tutorialId}`, fetcher);
    console.log('data',data);*/

  //  if (error) return <div>No se pudo cargar los datos</div>;
  //  if (!data) return <Loading />;
    const {user} = useAuth();
    return (
        <>
            <div>{user.name}</div>
            <div>{user.last_name}</div>
            <div>{user.birthday}</div>
            <div>{user.phone}</div>
            <div>{user.role}</div>
            <div>{user.biography}</div>
        <Tutorials/>
        </>
    );
};
export default withAuth(Profile);
//<h1>{data.name}</h1>
//<p>{data.last_name}</p>
//<p>{data.email}</p>
