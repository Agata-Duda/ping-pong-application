import React, { useContext } from "react"

import { PageTemplate } from "../templates/PageTemplate"
import { AppContext } from "../context/appContext"
import {Stack} from "@mui/system";

import {style} from "../components/userAccount/userStyle"
import {ProgressAccountCard} from "../components/userAccount/ProgressAccountCard";
import UsertextField from "../components/userAccount/UsertextField";

const UserAccountView = () => {
  const {user} = useContext(AppContext);

  return (
    <PageTemplate>
      <Stack sx={style.ViewStack} justifyContent={"space-evenly"} direction={"row"}>
          <UsertextField/>
          <ProgressAccountCard/>
      </Stack>


    </PageTemplate>
  )
}
export default UserAccountView
