local hasClosed = false

local function closeLoadingScreen()
	if hasClosed then
		return
	end
	hasClosed = true
	SendNUIMessage({ action = "close" })
	ShutdownLoadingScreenNui()
	ShutdownLoadingScreen()
end

AddEventHandler("playerSpawned", function()
	closeLoadingScreen()
end)

AddEventHandler("onClientResourceStart", function(resourceName)
	if resourceName ~= GetCurrentResourceName() then
		return
	end
	if NetworkIsSessionStarted() then
		closeLoadingScreen()
	end
end)
