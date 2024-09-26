import theme from "../theme";

export const globalAlertStyles = `
    .ant-message-notice-content{
         padding: 0px 0px;
         background: transparent !important;
         border-radius: 4px;
    }
    .ant-message-success{
        background: ${theme.green_lighter};
        border: 0.5px solid ${theme.green};
        box-sizing: border-box;
        border-radius: 4px;
        padding: 8px 48px 8px 11px;
        span{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: ${theme.black}; 
        }
    }
    .ant-message-error{
        background: ${theme.red_lighter};
        border: 0.5px solid ${theme.red};
        box-sizing: border-box;
        border-radius: 4px;
        padding: 8px 48px 8px 11px;
        span{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: ${theme.black}; 
        }
    }
    .ant-message-info{
        background: ${theme.blue_lighter};
        border: 0.5px solid ${theme.blue_default};
        box-sizing: border-box;
        border-radius: 4px;
        padding: 8px 48px 8px 11px;
        span{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: ${theme.black}; 
        }
    }
    .ant-message-warning{
        background: ${theme.yellow_lighter};
        border: 0.5px solid ${theme.yellow};
        box-sizing: border-box;
        border-radius: 4px;
        padding: 8px 48px 8px 11px;
        span{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: ${theme.black}; 
        }
    }`;
