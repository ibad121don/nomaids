import { Dimensions } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const COMPONENT_SIZE = {
    SCREEN_WIDTH: Dimensions.get('screen').width,
    SCREEN_HEIGHT: Dimensions.get('screen').height,
    WINDOW_WIDTH: Dimensions.get('window').width,
    WINDOW_HEIGHT: Dimensions.get('window').height,
}

const ACTIVE_OPACITY = 0.9;


const COLOR = {
    white: '#ffffff',
    black: '#000000',
    black_20: 'rgba(0,0,0,0.2)',
    black_30: 'rgba(0,0,0,0.3)',
    black_50: 'rgba(0, 0, 0, 0.5)',
    black_70: 'rgba(0, 0, 0, 0.7)',
    light_grey: '#e4e4e4',
    dark_grey: '#e4e4e4',
    nomadz_green: '#3F852B',
    grey_boder:"#BDBDBD",
    yellow:'yellow',
    grey2:'#B4B4B4',
    blue:'#1A2747'
};

const FONT = {
    PoppinsRegular: 'Poppins-Regular',
    PoppinsBold: 'Poppins-Bold',
    PoppinsExtraBold: 'Poppins-ExtraBold',
    PoppinsLight: 'Poppins-Light',
    PoppinsSemiBold: 'Poppins-SemiBold',
    PoppinsThin: 'Poppins-Thin',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsBlack: 'Poppins-Black',
}


const TEXT_STYLE = {
    title: {
        fontFamily: FONT.PoppinsExtraBold,
        fontStyle: "normal",
        fontSize: hp(2.5),
    },
    semi_title: {
        fontFamily: FONT.PoppinsMedium,
        fontStyle: "normal",
        fontSize: hp(1.75), //14
    },
    small_title: {
        fontFamily: FONT.PoppinsBold,
        fontStyle: "normal",
        fontSize: 17,
    },
    text: {
        fontFamily: FONT.PoppinsRegular,
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 13,
    },
    small_text: {
        fontFamily: FONT.PoppinsRegular,
        fontSize: 10,
    },
    text_bold: {
        fontFamily: FONT.PoppinsBold,
        fontStyle: "normal",
        fontSize: 12,
    },
    text_extra_bold: {
        fontFamily: FONT.PoppinsExtraBold,
        fontStyle: "normal",
        fontSize: 12,
    },
    bottom_tab_text: {
        fontFamily: FONT.PoppinsMedium,
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
    }
}



export { COLOR, TEXT_STYLE, hp, wp, ACTIVE_OPACITY, COMPONENT_SIZE };

