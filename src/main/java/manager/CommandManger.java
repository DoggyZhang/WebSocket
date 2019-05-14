package manager;

import core.WebSocketServer;
import interfaces.ProgressListener;
import interfaces.Task;
import task.Task1;
import utils.Log;
import utils.TextUtils;

import java.io.IOException;

public class CommandManger implements ProgressListener {

    public static final String TAG = "CommandManager";

    private static CommandManger INSTANCE = null;

    private CommandManger() {

    }

    public static CommandManger getInstance() {
        if (INSTANCE == null) {
            synchronized (CommandManger.class) {
                if (INSTANCE == null) {
                    INSTANCE = new CommandManger();
                }
            }
        }
        return INSTANCE;
    }

    /**
     * 下面的每一个命令都有不同的意义，每一条都执行一条不同的命令内容
     */
    private static final int COMMAND_0 = 0;
    private static final int COMMAND_1 = 1;
    private static final int COMMAND_2 = 2;
    private static final int COMMAND_3 = 3;
    private static final int COMMAND_4 = 4;
    private static final int COMMAND_5 = 5;
    private static final int COMMAND_6 = 6;

    private static Task task;

    public synchronized void execute(String msg) {
        if (TextUtils.isEmpty(msg)) {
            return;
        }
        int command = -1;
        try {
            command = Integer.valueOf(msg);
        } catch (Exception e) {
            Log.d(TAG, "Invalid Command : [" + msg + "], " + e.getMessage());
            e.printStackTrace();
            return;
        }
        Task task = null;
        switch (command) {
            case COMMAND_0:
                stop();
                break;
            case COMMAND_1:
                stop();
                task = new Task1();
                break;
            case COMMAND_2:
                return;
            case COMMAND_3:

                break;
            case COMMAND_4:

                break;
            case COMMAND_5:

                break;
            case COMMAND_6:

                break;
            default:
                Log.d(TAG, "Command is useless: [" + msg + "]");
                break;
        }
        if (task != null) {
            task.setListener(this);
        }
        ThreadManager.executeTask(task);
    }

    public synchronized void stop() {
        ThreadManager.stop();
    }

    public void onStart() {

    }

    public void onFinish(String msg) {
        //群发消息
        for (WebSocketServer item : WebSocketServer.webSocketSet) {
            try {
                item.sendMessage(msg);
            } catch (IOException e) {
                e.printStackTrace();
                continue;
            }
        }
    }


}
