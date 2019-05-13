package manager;

import interfaces.Task;
import utils.Log;

public class ThreadManager {

    public static final String TAG = "ThreadManger";

    /**
     * 创建一个 1核1线的线程池
     */
    private static Thread thread = null;

    public static synchronized void executeTask(Task task) {
        Log.d(TAG, "executeTask : " + task);
        stop();
        if (task == null) {
            return;
        }
        stop();
        thread = new Thread(task);
        thread.start();
    }

    public static synchronized void stop() {
        Log.d(TAG, "stop");
        if (thread != null) {
            thread.interrupt();
            thread.stop();
            thread = null;
        }
    }

}
