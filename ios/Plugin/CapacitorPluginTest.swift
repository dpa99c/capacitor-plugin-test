import Foundation

@objc public class CapacitorPluginTest: NSObject {
    private let prefix = "[iOS platform]: "
    @objc public func echo(_ value: String) -> String {
        let output = prefix + value
        print(output)
        return output
    }
}
