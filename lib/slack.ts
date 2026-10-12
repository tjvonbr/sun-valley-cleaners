// Posts a message to a Slack channel via the Bot API (chat.postMessage).
// Requires SLACK_BOT_TOKEN (xoxb-..., scope chat:write) and SLACK_CHANNEL_ID.
// Never throws: a Slack problem must not break the caller.

// Slack treats &, < and > as control characters in message text.
export function escapeSlack(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function postSlackMessage(text: string): Promise<void> {
  const token = process.env.SLACK_APP_TRACKER_BOT_TOKEN;
  const channel = process.env.SLACK_HIRING_CHANNEL_ID;
  if (!token || !channel) {
    console.warn("Slack not configured; skipping message");
    return;
  }

  try {
    const res = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ channel, text }),
      signal: AbortSignal.timeout(5000),
    });
    // Slack returns HTTP 200 with { ok: false, error } for most failures.
    const data = await res.json();
    if (!data.ok) console.error("Slack message failed:", data.error);
  } catch (error) {
    console.error("Slack message threw:", error);
  }
}
