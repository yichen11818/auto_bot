
dofile('0:/lua/lib.lua')
dofile('0:/lua/Actionlib.lua')

while(true)
do
    A = math.floor(HKEY())
    actname = req_actionLUA(A)

    if actname == 'default' then
        DelayMs(1)
    elseif actname == -255 then
        act_errorLUA()
    else
        act_startLUA()
        fun =_G[actname]
        fun()
        act_completeLUA()
        HKEY()
    end
    
end
-- 以上程序不允许修改
