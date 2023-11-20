import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./Menu";
import MenuHeader from "../../components/MenuHeader";
import { Vision } from "../Vision/Vision";
import Mision from "../Mision/Mision";
import Login from "../Login/Login";
import Registro from "../Registro.jsx/Registro";
import Perfil from "../Perfil/Perfil";

const Tab = createNativeStackNavigator()
export default function TabMenuNavegacion() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={Menu}
        name="Menu"
        options={
          {
            headerTitle: () => (<MenuHeader />),
            headerTitleAlign: "center",
            headerStyle: {
              height: 200
            },
          }
        }
      />

      <Tab.Screen
        name="Vision"
        component={Vision}
        options={
          {
            headerTitleAlign: "center"
          }
        }
      />
      <Tab.Screen
        name="Mision"
        component={Mision}
        options={
          {
            headerTitleAlign: "center"
          }
        }
      />

      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name="Registro"
        component={Registro}
        options={{
          tabBarVisible: false,
        }}
        
      />

      <Tab.Screen
        component={Perfil}
        name="Perfil"
      />
    </Tab.Navigator>
  )
}