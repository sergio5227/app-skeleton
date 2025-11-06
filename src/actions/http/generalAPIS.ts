

import axios from "../config";

export const getDataGrid = async (): Promise<any> => {
    try {
        const response: any = await axios.get(
             `${'https://www.ag-grid.com/'}${"example-assets/olympic-winners.json"}`,
        );
        return response?.data || [];
    } catch (error) {
        return error;
    }
};