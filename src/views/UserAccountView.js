import React, { useContext } from "react"

import { PageTemplate } from "../templates/PageTemplate"
import { AppContext } from "../context/appContext"
import {PersonalDetailsCard} from "../components/userAccount/PersonalDetailsCard";

const UserAccountView = () => {
  const {user} = useContext(AppContext);

  return (
    <PageTemplate>
     <PersonalDetailsCard/>
    </PageTemplate>
  )
}
export default UserAccountView
