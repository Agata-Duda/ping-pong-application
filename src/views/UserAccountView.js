import React, { useContext } from "react"

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"

import { PageTemplate } from "../templates/PageTemplate"
import { AppContext } from "../context/appContext"

const UserAccountView = () => {
  const [user] = useContext(AppContext);

  return (
    <PageTemplate>
    </PageTemplate>
  )
}
export default UserAccountView
