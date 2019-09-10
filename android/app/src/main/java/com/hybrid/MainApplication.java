package com.hybrid;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.soloader.SoLoader;

public class MainApplication extends Application implements ReactApplication {

  private HybridAppRNHost reactNativeHost = new HybridAppRNHost(this);

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this,false);
    initReact();
  }

  private void initReact() {
    try{
      Log.d("**********","createReactContextInBackground START");
      reactNativeHost.getReactInstanceManager().createReactContextInBackground();
      Log.d("**********","createReactContextInBackground SUCCESS");
    }catch (Exception e){
      Log.e("**********","createReactContextInBackground ERROR",e);
    }
  }

  @Override
  public HybridAppRNHost getReactNativeHost() {
    return reactNativeHost;
  }
}
