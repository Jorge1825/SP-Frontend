import { sugarAxios } from "../../global";
import { getToken } from "@/helpers";
import { useStorage } from "@/stores/localStorage.js";

/**
 * data: data cellars
 * @returns API Response, with the data of the cellars
 */

const getCellars = async () => {
  try {
    const tokenExist = getToken();
    const storage = useStorage();
    const idFarm = storage.idSelected;
    const { data } = await sugarAxios.get(`/inventory/cellar`, {
      headers: {
        token: tokenExist,
        farm: idFarm
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

const postCellar = async (type) => {
  try {
    const tokenExist = getToken();
    const storage = useStorage();
    const idFarm = storage.idSelected;
    const { data } = await sugarAxios.post(
      `/inventory/cellar/register`,
      {
        name: type.name,
        typecontract: type.typecontract,
        description: type.description,
        value: type.value,
      },
      {
        headers: {
          token: tokenExist,
          farm:idFarm
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const updateCellar = async (item) => {
  try {
    const tokenExist = getToken();
    const storage = useStorage();
    const idFarm = storage.idSelected;
    const { data } = await sugarAxios.put(
      `/inventory/cellar/update/${item.id}`,
      {
        name: item.name,
        typecontract: item.typecontract,
        description: item.description,
        value: item.value,
      },
      {
        headers: {
          token: tokenExist,
          farm: idFarm
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const inactiveCellar = async (id) => {
  try {
    const tokenExist = getToken();
    const storage = useStorage();
    const idFarm = storage.idSelected;
    const { data } = await sugarAxios.put(
      `/inventory/cellar/inactive/${id}`,
      {},
      {
        headers: {
          token: tokenExist,
          farm: idFarm
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const activeCellar = async (id) => {
  try {
    const tokenExist = getToken();
    const storage = useStorage();
    const idFarm = storage.idSelected;
    const { data } = await sugarAxios.put(
      `/inventory/cellar/active/${id}`,
      {},
      {
        headers: {
          token: tokenExist,
          farm: idFarm
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getCellars, postCellar, inactiveCellar, activeCellar, updateCellar };
