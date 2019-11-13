import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import MyWalletBalance from "./myWalletBalanceScreen";
import CameraScreen from "./cameraScreen";
import TransactionScreen from "./transactionScreen";
import MerchantEnterAmountScreen from "./merchantEnterAmountScreen";
import PasscodeScreen from "./passcodeScreen";
import SuccessScreen from "./successScreen";
import AllScreen from "./allScreens";
import TransactionHistoryWithdrawScreen from "./transactionHistoryWithdrawScreen";
import TransactionHistoryexpandedScreen from "./transactionHistoryexpandedScreen";
import CustomerTopUpScreen from "./customerTopUpScreen";
import AddNewCardScreen from "./addNewCardScreen";
import SelectPaymentCardScreen from "./selectPaymentCardScreen";
import TransactionProcessingScreen from "./transactionProcessingScreen";

const UserStack = createStackNavigator(
  {
    MyWalletBalance,
    CameraScreen,
    TransactionScreen,
    PasscodeScreen,
    MerchantEnterAmountScreen,
    SuccessScreen,
    AllScreen,
    TransactionHistoryWithdrawScreen,
    TransactionHistoryexpandedScreen,
    CustomerTopUpScreen,
    AddNewCardScreen,
    SelectPaymentCardScreen,
    TransactionProcessingScreen
  },
  {
    initialRouteName: "AllScreen"
  }
);

const AppNavigatorContainer = createSwitchNavigator(
  {
    UserStack
  },
  {
    initialRouteName: "UserStack"
  }
);

export default createAppContainer(AppNavigatorContainer);
