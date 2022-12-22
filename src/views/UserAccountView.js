import React from "react"

import { PageTemplate } from "../templates/PageTemplate"
import {Stack} from "@mui/system";

import {style} from "../components/userAccount/userStyle"
import {ProgressAccountCard} from "../components/userAccount/ProgressAccountCard";
import UsertextField from "../components/userAccount/UsertextField";

const UserAccountView = () => {

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
