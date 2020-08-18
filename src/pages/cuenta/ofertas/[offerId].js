import React, {useEffect, useState} from 'react';
import Head from "next/head";
import moment from "moment";
import axios from "axios";
import Cookies from "js-cookie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

import AccountLayout from "../../../components/AccountLayout/AccountLayout";
import {useUser} from "../../../context/userContext";
import firebase from "../../../firebase/clientApp";
import {BONITA_URL} from "../../../utils/constants";
import CostCard from "../../../components/CostCard/CostCard";

const Offer = ({offerId}) => {
    const {user} = useUser();
    const [offer, setOffer] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [nextTask, setNextTask] = useState(null);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        if (!user) return;
        const db = firebase.firestore();
        return db.collection(`users/${user.uid}/offers`).doc(offerId)
            .onSnapshot(snapshot => {
                setOffer(snapshot.data());
            }, error => console.log(error));
    }, [user, offerId]);
    useEffect(() => {
        if (!offer) return;
        axios.get(`${BONITA_URL}/bonita/API/bpm/archivedTask?p=0&c=10&f=rootCaseId=${offer.caseId}&o=reached_state_date DESC`, {
            headers: {
                'X-Bonita-API-Token': Cookies.get("X-Bonita-API-Token")
            },
            withCredentials: true,
        })
            .then(res => res.data)
            .then(setTasks)
            .then(() => axios.get(`${BONITA_URL}/bonita/API/bpm/humanTask?p=0&c=10&f=rootCaseId=${offer.caseId}`, {
                headers: {
                    'X-Bonita-API-Token': Cookies.get("X-Bonita-API-Token")
                },
                withCredentials: true,
            }))
            .then(res => res.data[0])
            .then(setNextTask);
    }, [offer, reload]);
    const handleCostSubmit = () => setTimeout(() => setReload(r => !r), 1000);
    return (
        <AccountLayout>
            <Head>
                <title>Oferta</title>
            </Head>
            {offer && (
                <section className="section px-0 py-5">
                    <h1 className="title is-1">Oferta de {offer.type}</h1>
                    <h3 className="subtitle">Publicada
                        el {moment(offer.publishedAt?.toDate() || new Date()).format('lll')}</h3>
                    {nextTask?.assigned_id === user.bonitaId && <CostCard task={nextTask} onSubmit={handleCostSubmit}/>}
                    <VerticalTimeline>
                        {tasks.map((task, index) => (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                key={task.id}
                                animate
                                date={moment(task.archivedDate).format("DD-MM-YYYY HH:mm")}
                                iconStyle={{
                                    background: index === tasks.length - 1 ? 'rgb(68,183,42)' : "#8d99ae",
                                    color: '#fff'
                                }}
                                icon={<FontAwesomeIcon
                                    icon={task.executedBy === user.bonitaId ? "star" : task.type === "USER_TASK" ? "user" : "cog"}
                                    size="lg" style={{marginLeft: "-13px"}}
                                    fixedWidth
                                />}
                            >
                                <h3 className="vertical-timeline-element-title">{task.displayName}</h3>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </section>
            )}
        </AccountLayout>
    );
};

export async function getServerSideProps({params}) {
    return {props: {offerId: params.offerId}};
}

export default Offer;