import Comments from "@/components/Comments";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { useRouter } from "next/router";
import React from "react";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";

const Profile = () => {
    const router = useRouter();
    const { userId } = router.query;
    const { data, error } = useSWR(`/users/${userId}`, fetcher);

    if (error) return <div>No se pudo cargar los datos</div>;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.lastname}</p>
            <p>{data.email}</p>
        </div>
    );
};

export default withAuth(Profile);