import React, {useState, useContext, useEffect} from "react"
import { useQuery } from "react-query";
import Select from "react-select"
import { useForm, Controller } from "react-hook-form"

import {Typography, Button, Box, Stack, TextField} from "@mui/material"
import {
    updateUserDetails,
    getJobs, getUserByID
} from "../util/ApiMethods"

import {style} from "../userAccount/userStyle"
import {AppContext} from "../../context/appContext";

export default function UpdateUserDetailsForm ({DrawerTriggerClose}) {

    const { control, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm()
    const {data: jobs , isFetching} = useQuery("job",() => getJobs());
    const {data: updatedUserInfo } = useQuery("updatedUser",() => getUserByID(user.userId));

    const {user, setUser} = useContext(AppContext);

    const [jobTitlesList, setJobTitlesList] = useState([]);
    const [updateUserID, setUpdatedUserID]  = useState([]);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedLastName, setUpdatedLastName] = useState('');
    const [updatedUsername, setupdatedUsername] = useState('');
    const [updatedEmail, setUpdatedEmail] = useState('');
    const [updatedPassword, setUpdatedPassword] = useState('');
    const [updatedJob, setUpdatedJob] = useState('');

    useEffect(() => {
        setUpdatedUserID(user.userId)
        const mappedJobsList = jobs?.map((d) => {
            return({
                label: d.title,
                value: d.job_id})
        });
        setJobTitlesList(mappedJobsList)
    },[jobs])

    const updateDetailsComponent= () => {
        setUser(updatedUserInfo)
    }

    const onSubmitUserDetails = () => {
        updateUserDetails(user.userId, {
            userId: user.userId,
            userName: updatedUsername,
            password: updatedPassword,
            firstName: updatedName,
            lastName: updatedLastName,
            accountType: user.accountType,
            createdOn: user.createdOn,
            jobTitle: updatedJob.value,
            email: updatedEmail,
            totalGames: user.totalGames,
            updatedOn: new Date(),
            wins: user.wins,
        })
        updateDetailsComponent()
        DrawerTriggerClose()
    }

    return (
        <form onSubmit={handleSubmit(onSubmitUserDetails)} padding={5}>
            <Stack spacing={3} direction="column" paddingLeft={1} paddingRight>
                <Stack spacing={0}>
                    <Typography fontWeight={'bold'}> User ID </Typography>
                    <Controller
                        control={control}
                        name="TextFieldUserId"
                        id={"TextFieldUserId"}
                        render={({ field }) =>
                            <TextField
                                {...field}
                                disabled={true}
                                value={updateUserID}
                                required
                                onChange={e => setUpdatedUserID(e.target.value)}
                                error={!!errors.TextFieldUserId}
                                helperText={errors.TextFieldUserId && `${errors.TextFieldUserId.message}`}
                            />
                        }
                    />
                </Stack>
                <Stack spacing={0}>
                    <Typography fontWeight={'bold'}> Username </Typography>
                    <Controller
                        control={control}
                        name="TextFieldUsername"
                        render={({ field }) =>
                            <TextField
                                {...field}
                                placeholder={user.userName}
                                value={updatedUsername}
                                required
                                value={updatedUsername}
                                onChange={e => setupdatedUsername(e.target.value)}
                                error={!!errors.TextFieldUsername}
                                helperText={errors.TextFieldUsername && `${errors.TextFieldUsername.message}`}
                            />
                        }
                    />
                </Stack>
                <Stack spacing={0}>
                    <Typography fontWeight={'bold'}> First Name </Typography>
                    <Controller
                        control={control}
                        name="TextFieldFirstName"
                        render={({ field }) =>
                            <TextField
                                {...field}
                                placeholder={user.firstName}
                                required
                                value={updatedName}
                                onChange={e => setUpdatedName(e.target.value)}
                                error={!!errors.TextFieldFirstName}
                                helperText={errors.TextFieldFirstName && `${errors.TextFieldFirstName.message}`}
                            />
                        }
                    />
                </Stack>
                <Stack spacing={0}>
                    <Typography fontWeight={'bold'}>Last Name </Typography>
                    <Controller
                        control={control}
                        name="TextFieldLastName"
                        render={({ field }) =>
                            <TextField
                                {...field}
                                placeholder={user.lastName}
                                required
                                value={updatedLastName}
                                onChange={e => setUpdatedLastName(e.target.value)}
                                error={!!errors.TextFieldLastName}
                                helperText={errors.TextFieldLastName && `${errors.TextFieldLastName.message}`}
                            />
                        }
                    />

                </Stack>
                <Stack spacing={0}>
                    <Typography fontWeight={'bold'}>Job Title </Typography>
                    <Controller
                        control={control}
                        name="SelectJobTitle"
                        render={({ field }) =>
                            <Select
                                {...field}
                                options={jobTitlesList}
                                onChange={setUpdatedJob}
                                defaultValue={updatedJob}
                                placeholder="Select Job Description"
                                required
                                error={!!errors.SelectJobTitle}
                                helperText={errors.SelectJobTitle && `${errors.SelectJobTitle.message}`}
                            />
                        }
                    />
                </Stack>
                <Stack spacing={0}>
                    <Typography fontWeight={'bold'}>Email </Typography>
                    <Controller
                        control={control}
                        name="TextFieldEmail"
                        render={({ field }) =>
                            <TextField
                                {...field}
                                placeholder={user.email}
                                required
                                value={updatedEmail}
                                onChange={e => setUpdatedEmail(e.target.value)}
                                error={!!errors.TextFieldEmail}
                                helperText={errors.TextFieldEmail && `${errors.TextFieldEmail.message}`}
                            />
                        }
                    />

                </Stack>
                <Stack spacing={0}>
                    <Typography fontWeight={'bold'}> Password </Typography>
                    <Controller
                        control={control}
                        name="TextFieldPassword"
                        render={({ field }) =>
                            <TextField
                                {...field}
                                placeholder={user.password}
                                required
                                value={updatedPassword}
                                onChange={e => setUpdatedPassword(e.target.value)}
                                error={!!errors.TextFieldPassword}
                                helperText={errors.TextFieldPassword && `${errors.TextFieldPassword.message}`}
                            />
                        }
                    />

                </Stack>
                <Box align="center"> <Button sx={style.buttonSubmit} type="submit"> Update </Button></Box>
            </Stack>
        </form>
    )
}
