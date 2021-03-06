/**
 * @description: 公用后台数据（通过接口获取到的）
 * @author: cnn
 * @createTime: 2020/11/27 17:25
 **/
import { get, post } from '@utils/Ajax';
import { IOptionData } from '@utils/CommonInterface';
import { message } from 'antd';

/**
 * 获取所有未禁用的机构列表
 * **/
export const getOrgTreeEnableList = () => {
  return new Promise((resolve: any) => {
    get('security/organization/listAllEnableForAdmin', {}, {}, (data: any) => {
      if (data.flag === 0) {
        resolve(data.data.children);
      }
    });
  });
};
/**
 * 获取省市区
 * **/
export const getAllProvinceCityArea = async () => {
  return new Promise((resolve: any) => {
    get('sysmanage/provinceCityArea/getAllProvinceCityArea', {}, {}, (data: any) => {
      if (data.flag === 0) {
        resolve(data.data);
      }
    });
  });
};
/**
 * 获取数据字典数据
 **/
export const getDictValueList = async (module: string, number: string) => {
  return new Promise((resolve: any) => {
    post('sysmanage/dictValue/getByTypeModuleNumber', { module, number }, {}, (data: any) => {
      if (data.flag === 0) {
        const optionList: Array<IOptionData> = data.data.map((item: any) => ({ label: item.mvalue, value: item.mvalue }));
        resolve(optionList);
      }
    });
  });
};
/**
 * 获取机构列表
 * **/
export const getOrgTreeList = async () => {
  return new Promise((resolve: any) => {
    post('security/organization/listAllInTree', {}, {}, (data: any) => {
      if (data.flag === 0) {
        resolve(data.data.children);
      }
    });
  });
};
/**
 * @description 根据id删除数据
 * @param url 接口地址
 * @param id
 */
export const deleteById = (url: string, id: string) => {
  return new Promise((resolve: any) => {
    post(url, { id }, { dataType: 'form' }, (data: any) => {
      if (data.flag === 0) {
        message.success('删除成功');
        resolve(data);
      }
    });
  });
};
