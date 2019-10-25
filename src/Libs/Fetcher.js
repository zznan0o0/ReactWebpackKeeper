import { Toast} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

// Toast.success('Load success !!!', 2);
// Toast.offline('This is a toast tips !!!', 3, null, true);
// Toast.hide()
// Toast.loading('Loading...', 0);


class Fetcher {
  postUrl(url, data, fn){
    this.post(this.url(url), data, fn);
  }

  url(url){
    return WEBCONFIG.domain + url;
  }

  post(url, data, fn) {
    Toast.loading('Loading...', 0);
    this.postRequest(url, data)
      .then(response => response.json())
      .catch(error => {
        Toast.hide();
        Toast.fail('请求出错了请联系相关人员！！！', 3, null);
      })
      .then(response => {
        Toast.hide();
        if (response.state == 1) {
          fn(response);
        } else {
          if (response.notice) Toast.info(response.notice, 3, null);
          else Toast.fail('请求出错了请联系相关人员！！！', 3, null);
        }
      });
    // .catch(error => message.error('请求出错了请联系技术人员！！！'));
  }

  postRequest(url, data) {
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      mode: 'cors',
      body: this.params(data)
    });
  }

  params(d) {
    var dic = {};
    for (let k in d) {
      var key = k;
      if (typeof d[k] == 'object') {
        this.recParams(d[k], dic, key);
      } else {
        dic[key] = d[k];
      }
    }
    var arr = [];

    for (let k in dic) {
      arr.push(encodeURIComponent(k) + '=' + encodeURIComponent(dic[k]));
    }

    return arr.join('&');
  }

  recParams(d, dic, key) {
    for (let k in d) {
      var kk = key + '[' + k + ']';
      if (typeof d[k] == 'object') {
        this.recParams(d[k], dic, kk);
      } else {
        dic[kk] = d[k];
      }
    }
    return dic;
  }
}

export default Fetcher;
