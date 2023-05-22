package com.example.webapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.provider.Settings;
import android.webkit.WebSettings;
import android.webkit.WebView;
import javax.websocket.ClientEndpoint;
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        WebView webView= findViewById(R.id.web);//获取网络视图对象
        WebSettings settings= webView.getSettings();//获取网络视图设置
        settings.setJavaScriptEnabled(true);//设置启动JavaScript
        settings.setDomStorageEnabled(true);
        webView.loadUrl("http://10.19.48.75");//设置要加载的界面
    }
}