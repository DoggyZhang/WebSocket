package task;

import interfaces.Task;
import utils.Log;

import java.io.*;
import java.net.Socket;

public class Task1 extends Task {

    public static final String TAG = "Task1";

    public static final String HOST = "localhost";
    public static final int PORT = 8888;
    public static final long SLEEP_TIME = 300;

    public String execute() {
        while (true) {
            try {
                //创建Socket对象
                Socket socket = new Socket(HOST, PORT);
                InputStream inputStream = socket.getInputStream();//获取一个输入流，接收服务端的信息
                InputStreamReader inputStreamReader = new InputStreamReader(inputStream);//包装成字符流，提高效率
                BufferedReader bufferedReader = new BufferedReader(inputStreamReader);//缓冲区
                String info = "";
                String line = null;//临时变量
                while ((line = bufferedReader.readLine()) != null) {
                    info += line;
                }
                Log.d(TAG, info);

                //关闭相对应的资源
                bufferedReader.close();
                inputStream.close();
                socket.close();

                if (getListener() != null) {
                    getListener().onFinish(info);
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
            }
        }
    }
}
